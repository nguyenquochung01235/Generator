import time

from flask_cors import CORS, cross_origin
from flask import Flask, request
import re
import json
import random
from random_functions import api
from dataStructure import dataStructure
from db import database

def createField(data):
	lField = []
	tmp_data = {}
	tmpKey = ""
	for i in range(len(data)):

		if isKeyObject(data[i]):
			tmp_data.update({"keyName": get_keyname(data[i]).replace(" ", "_")})
			tmp_data.update({"dataType": get_datatype(data[i + 1])})
			key_parent = tmpKey
			try:
				tmp_data.update({"valueType": get_valuetype(data[i + 2]).lower()})
			except:
				pass

			option = []
			try:
				for j in range(i + 3, i + 6):
					if isOption(data[j]):
						# if get_option(data[j]) != "":
						option.append(get_option(data[j]))
			except:
				pass

			if option:
				tmp_data.update({"option": option})
			tmp_data.update({"parent": key_parent})

		elif isKeyname(data[i]):
			tmp_data.update({"keyName": get_keyname(data[i]).replace(" ", "_")})
			tmp_data.update({"dataType": get_datatype(data[i + 1])})
			key_parent = "root"
			tmpKey = tmp_data["keyName"]
			try:
				tmp_data.update({"valueType": get_valuetype(data[i + 2]).lower()})
			except:
				pass

			option = []
			try:
				for j in range(i + 1, i + 6):
					if isOption(data[j]):
						# if get_option(data[j]) != "":
						option.append(get_option(data[j]))
			except:
				pass

			if option:
				tmp_data.update({"option": option})
			tmp_data.update({"parent": key_parent})

		if tmp_data:
			lField.append(tmp_data)
			tmp_data = {}

	return lField

def decodeHtml(data):
	data = re.sub("%20", " ", data)
	data = re.sub("%21", "!", data)
	data = re.sub("%22", '"', data)
	data = re.sub("%23", "#", data)
	data = re.sub("%24", "$", data)
	data = re.sub("%25", "%", data)
	data = re.sub("%26", "&", data)
	data = re.sub("%27", "'", data)
	data = re.sub("%28", "(", data)
	data = re.sub("%29", ")", data)
	data = re.sub("%2A", "*", data)
	data = re.sub("%2B", "+", data)
	data = re.sub("%2C", ",", data)
	data = re.sub("%2D", "-", data)
	data = re.sub("%2E", ".", data)
	data = re.sub("%2F", "/", data)

	data = re.sub("%3A", ":", data)
	data = re.sub("%3B", ";", data)
	data = re.sub("%3C", "<", data)
	data = re.sub("%3D", "=", data)
	data = re.sub("%3E", ">", data)
	data = re.sub("%3F", "?", data)
	data = re.sub("%40", "@", data)

	return data


def generate_json_format(tmpdata):

	data = decodeHtml(tmpdata)

	data = re.split("&", data)

	obj_dataStructure = dataStructure()

	lField = createField(data)

	for element in lField:
		if element["parent"] == "root":
			if element["dataType"] == "normal":
				obj_dataStructure.createCommonData(element["keyName"])
				obj_dataStructure.updateCommonData(element["keyName"],get_random_value(element) )

			elif element["dataType"] == "array":
				obj_dataStructure.createArrayData(element["keyName"])
				for i in range(int(element["option"][0])):
					obj_dataStructure.updateArrayData(element["keyName"], get_random_value(element))

			elif element["dataType"] == "object":
				obj_dataStructure.createObjectData(element["keyName"])
				subobj = dataStructure()
				for tmp in lField:
					if tmp["parent"] == element["keyName"]:
						if tmp["dataType"] == "normal":
							subobj.createCommonData(tmp["keyName"])
							subobj.updateCommonData(tmp["keyName"], get_random_value(tmp))

						elif tmp["dataType"] == "array":
							subobj.createArrayData(tmp["keyName"])
							for i in range(int(tmp["option"][0])):
								subobj.updateArrayData(tmp["keyName"], get_random_value(tmp))
					if subobj.data:
						obj_dataStructure.updateObjectData(element["keyName"], subobj.data)

			elif element["dataType"] == "arrobj":
				obj_dataStructure.createArrayData(element["keyName"])

				for i in range(int(element["option"][0])):
					subobj = dataStructure()
					for tmp in lField:
						if tmp["parent"] == element["keyName"]:
							if tmp["dataType"] == "normal":
								subobj.createCommonData(tmp["keyName"])
								subobj.updateCommonData(tmp["keyName"], get_random_value(tmp))

							elif tmp["dataType"] == "array":
								subobj.createArrayData(tmp["keyName"])
								subobj.updateArrayData(tmp["keyName"], get_random_value(tmp))
					if subobj.data:
						obj_dataStructure.updateArrayData(element["keyName"], subobj.data)

	return obj_dataStructure


def get_random_function(element):
	random = api()
	name = re.sub(" ", "", element["valueType"].lower())
	apiName = "random_" + name
	rand_func = getattr(random, apiName, None)
	return rand_func

def get_parameter(element):
	try:
		if element["dataType"] == "arrobj" or element["dataType"] == "array":
			parameter = element["option"][1:]
		else:
			parameter = element["option"]
	except:
		parameter = []
	return parameter

def get_random_value(element):
	rand_func = get_random_function(element)
	parameter = get_parameter(element)

	if not rand_func:
		value = random.choice(getattr(db, element["valueType"]))
	else:
		value = rand_func(args=parameter, db=db)
	return value

def get_value_from_response(row):
	return re.findall("=.*", row)[0][1:]

def isKeyname(row):
	if re.findall("key_\S+=", row):
		return True

def isKeyObject(row):
	if re.findall("key_object_\S+=", row):
		return True
	else:
		return False

def isOption(row):
	if re.findall("option_\S+=", row):
		return True
	else:
		return False

def get_keyname(row):
	if re.findall("key_\S+=", row):
		return re.findall("=.*", row)[0][1:]
	else:
		return ""

def get_datatype(row):
	if re.findall("data_type_\S+=", row):
		return re.findall("=.*", row)[0][1:]
	else:
		return ""

def get_option(row):
	if re.findall("option_\S+=", row):
		return re.findall("=.*", row)[0][1:]
	else:
		return ""

def get_valuetype(row):
	if re.findall("value_type_\S+=", row):
		return re.findall("=.*", row)[0][1:]
	else:
		return ""

def get_array_element_number(row):
	if re.findall("array_option_\S+=", row):
		return re.findall("=.*", row)[0][1:]
	else:
		return ""

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/", methods = ["GET"])
@cross_origin()
def test_serve():
	return "Server is running"

@app.route("/data/render", methods = ["POST"])
@cross_origin()
def render_data():
	data = request.form.get('dataForm')
	result = []
	try:
		if db_changed:
			pass
	except:
		global db
		db = database()

	number_of_row = re.split("&",data)[0]
	number_of_row = int(re.findall("=\d*", number_of_row)[0][1:])

	format_file = re.split("&", data)[1]
	format_file  = re.findall("=\w*", format_file)[0][1:]

	try:
		table_name = re.split("&", data)[2]
		table_name = re.findall("=\w*", table_name)[0][1:]
	except:
		table_name = ""
	for i in range(number_of_row):
		element = generate_json_format(data).format_data()
		result.append(element)

	
	if format_file == "JSON":
		return export_json_file(result)
	elif format_file == "SQL":
		return export_sql_file(result,table_name)
	elif format_file == "CSV":
		return export_json_file(result)
	elif format_file == "EXCEL":
		return export_json_file(result)
	elif format_file == "XML":
		return export_json_file(result)


@app.route("/updatedb", methods = ["POST"])
@cross_origin()
def update_database():

	data = request.form.get('dataForm')
	dict_data = json.loads(data)

	db_function = api()
	ldata = []
	for name in dict_data[0]:
		pass

	for element in dict_data:
		ldata.append(element[name])

	status, newdb = db_function.updateDatabase(name=name, data=ldata)
	if status:
		msg = "Updated your field to database"
	else:
		msg = "ERROR: this field already had in database"
	global db
	db = newdb

	global db_changed
	db_changed = status

	return msg

def export_json_file(result):
	return str(result).replace("'", '"')

def export_sql_file(result, table_name):
	sql_file = ""
	for row in result:
		lcol = ""
		lvalue = ""
		for col in row:
			lcol +=" "+ str(col) + ","
			lvalue +=" '" + str(row[col]) + "',"
		lcol = lcol[:-1]
		lvalue = lvalue[:-1]

		sql_template = "INSERT INTO `" + table_name + "`("+lcol+") VALUES ("+lvalue+");"
		sql_file += sql_template
	return sql_file



if __name__ == "__main__":
	app.run()
	