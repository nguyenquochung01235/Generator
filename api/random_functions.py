import calendar
import random
import string
import re
from db import database

class api():


	def formatData(self, rawdata):
		if type(rawdata) == list:
			return rawdata
		
		item_list = re.split("\n", rawdata)
		data = []
		for item in item_list:
			if item != "":
				if "'" not in item and item not in data:
					data.append(item)
		return data

	def updateDatabase(self, name, data):
		debug = False

		db = database()

		data_list = self.formatData(data)
		name_html = name.capitalize()

		name = re.sub(" ", "", name)

		setattr(db, name, data_list)

		file_db_in = open("./api/db.py",encoding="utf8",  mode="rt")
		if debug:
			file_db_in = open("db.py",encoding="utf8",  mode="rt")
		db_contend = file_db_in.read().split("\n")

		for line in db_contend:
			try:
				name_in_db = re.findall("self\.\w* =", line)[0]
				if name.lower() in name_in_db.lower():
					print("ERROR: This name is already have in database.")
					status = False
					return status, db
			except:
				pass

		file_database = open("./api/db.py", mode="a")
		if debug:
			file_database = open("db.py", mode="a")
		file_database.write("\n\t\tself." + name + " = " + str(data_list) + "\n")

		file_API = open("./api/random_functions.py", mode="a")
		if debug:
			file_API = open("random_functions.py", mode="a")
		file_API.write("\n\t\t###API for random " + name + " ###")
		file_API.write("\n\tdef random_" + name.lower() + "(self, args= [], db = database()):")
		file_API.write("\n\t\treturn random.choice(db." + name + ")\n")

		file_fe_in = open("./ui/js/append.js", mode="rt")
		if debug:
			file_fe_in = open("../ui/js/append.js", mode="rt")
		contend = file_fe_in.read().split("\n")
		for line in contend:
			if "<h4>Customize</h4>" in line:
				newrow = contend[contend.index(line)].replace("<h4>Customize</h4>", "<h4>"+name_html+"</h4>")
				contend[contend.index(line)] = newrow

				contend.insert(contend.index(newrow) + 5, "")
				contend.insert(contend.index(newrow) + 6, """                <div class="type-option" onclick="getAndAppendValueType(this,'${idString}')" >""")
				contend.insert(contend.index(newrow) + 7, "")
				contend.insert(contend.index(newrow) + 8, "                    <h4>Customize</h4>")
				contend.insert(contend.index(newrow) + 9, "")
				contend.insert(contend.index(newrow) + 10, "                    <p>Customize data from user</p>")
				contend.insert(contend.index(newrow) + 11, "")
				contend.insert(contend.index(newrow) + 12, "                </div>")
				break

		file_fe_in.close()

		modify_fe = open("./ui/js/append.js", mode="wt")
		if debug:
			modify_fe = open("../ui/js/append.js", mode="wt")

		for line in contend:
			modify_fe.write(line)
			modify_fe.write("\n")
		modify_fe.close()

		status = True
		return status, db


	def wrap(self, args, defaultmin = 0, defaultmax = 100):

		if args[0] == "":
			min = defaultmin
		else:
			min = int(args[0])
		if args[1] == "":
			max = defaultmax
		else:
			max = int(args[1])

		if min > max:
			tmp = min
			min = max
			max = tmp
		return min, max

	###API for random animalName ###
	def random_animalname(self, args= [], db = database()):
		return random.choice(db.animalName)

	###API for random appBundleID ###
	def random_appbundleid(self, args= [], db = database()):
		return random.choice(db.appBundleID)

	###API for random appName ###
	def random_appname(self, args= [], db = database()):
		return random.choice(db.appName)

	###API for random avatar ###
	def random_avatar(self, args= [], db = database()):
		return random.choice(db.avatar)

	###API for random boolean ###
	def random_boolean(self, args= [], db = database()):
		return random.choice(db.boolean)

	###API for random carBrand ###
	def random_carbrand(self, args= [], db = database()):
		return random.choice(db.carBrand)

	###API for random carModel ###
	def random_carmodel(self, args= [], db = database()):
		return random.choice(db.carModel)

	###API for random city ###
	def random_city(self, args= [], db = database()):
		return random.choice(db.city)

	###API for random color ###
	def random_color(self, args= [], db = database()):
		return random.choice(db.color)

	###API for random companyName ###
	def random_companyname(self, args= [], db = database()):
		return random.choice(db.companyName)

	###API for random constructionHeavyEquipment ###
	def random_constructionheavyequipment(self, args= [], db = database()):
		return random.choice(db.constructionHeavyEquipment)

	###API for random constructionMaterial ###
	def random_constructionmaterial(self, args= [], db = database()):
		return random.choice(db.constructionMaterial)

	###API for random constructionRole ###
	def random_constructionrole(self, args= [], db = database()):
		return random.choice(db.constructionRole)

	###API for random constructionTrade ###
	def random_constructiontrade(self, args= [], db = database()):
		return random.choice(db.constructionTrade)

	###API for random country ###
	def random_country(self, args= [], db = database()):
		return random.choice(db.country)

	###API for random countryCode ###
	def random_countrycode(self, args= [], db = database()):
		return random.choice(db.countryCode)

	###API for random creditCardType ###
	def random_creditcardtype(self, args= [], db = database()):
		return random.choice(db.creditCardType)

	###API for random currency ###
	def random_currency(self, args= [], db = database()):
		return random.choice(db.currency)

	###API for random currencyCode ###
	def random_currencycode(self, args= [], db = database()):
		return random.choice(db.currencyCode)

	###API for random department ###
	def random_department(self, args= [], db = database()):
		return random.choice(db.department)

	###API for random domain ###
	def random_domain(self, args= [], db = database()):
		return random.choice(db.domain)

	###API for random dummyImageURL ###
	def random_dummyimageurl(self, args= [], db = database()):
		return random.choice(db.dummyImageURL)

	###API for random fileExtension ###
	def random_fileextension(self, args= [], db = database()):
		return random.choice(db.fileExtension)

	###API for random fileName ###
	def random_filename(self, args= [], db = database()):
		return random.choice(db.fileName)

	###API for random firstName ###
	def random_firstname(self, args= [], db = database()):
		return random.choice(db.firstName)

	###API for random jobTitle ###
	def random_jobtitle(self, args= [], db = database()):
		return random.choice(db.jobTitle)

	###API for random language ###
	def random_language(self, args= [], db = database()):
		return random.choice(db.language)

	###API for random lastName ###
	def random_lastname(self, args= [], db = database()):
		return random.choice(db.lastName)

	###API for random productGrocery ###
	def random_productgrocery(self, args= [], db = database()):
		return random.choice(db.productGrocery)

	###API for random streetName ###
	def random_streetname(self, args= [], db = database()):
		return random.choice(db.streetName)

	###API for random timeZone ###
	def random_timezone(self, args= [], db = database()):
		return random.choice(db.timeZone)

	###API for random gender ###
	def random_gender(self, args= [], db = database()):
		return random.choice(db.gender)

	###API for random programmingLanguage ###
	def random_programminglanguage(self, args= [], db = database()):
		return random.choice(db.programmingLanguage)

	###API for random dayWeek ###
	def random_dayofweek(self, args= [], db = database()):
		return random.choice(db.dayWeek)

	###API for random month ###
	def random_month(self, args= [], db = database()):
		return random.choice(db.month)

	###API for random customdata ###
	def random_randomlist(self, args= [], db = database()):
		if len(args) == 1:
			try:
				dataset = re.split(",", args[0])
			except:
				dataset = args
		else:
			dataset = args

		if dataset:
			result = random.choice(dataset)
		else:
			result = []

		return result

	###API for random fullName ###
	def random_fullname(self, args= [], db = database()):
		return self.random_firstname() + " " + self.random_lastname()

	###API for random userName ###
	def random_username(self, args= [], db = database()):
		return (self.random_firstname()[0].lower() + self.random_lastname().lower() + str(random.randint(1, 99))).replace(" ","")

	###API for random Age ###
	def random_age(self, args= [], db = database()):

		min = 1
		max = 100
		if args:
			min, max = self.wrap(args, min, max)

		return random.randint(min, max)

	###API for random year ###
	def random_year(self, args= [], db = database()):
		min = 1800
		max = 2200
		if args:
			min, max = self.wrap(args, min, max)

		return random.randint(min, max)

	###API for random email ###
	def random_email(self, args= [], db = database()):

		name = self.random_username()
		if args:
			domain = random.choice(args)
		else:
			domain = self.random_domain()
			return name.lower() + "@" + domain

		extends = ["com", "net", "org", "edu", "vn", "com.vn", "net.vn", "edu.vn", "ac.uk", "co.uk", "gov.uk", "me.uk", "org.uk"]

		return name.lower() + "@" + domain + "." + self.random_randomlist(extends)

	###API for random ipv4 ###
	def random_ipv4(self, args= [], db = database()):
		offset = [1, 0, 0, 1]
		ip = ""
		for i in offset:
			ip += str(random.randint(i, 255))
			ip += "."
		return ip[0:-1]

	###API for random ipv6 ###
	def random_ipv6(self, args= [], db = database()):
		template = string.digits + "ABCDEF"
		ipv6 = ""
		for i in range(8):
			ipv6 += ''.join(random.choice(template) for _ in range(4))
			ipv6 += "."
		return ipv6[0:-1]

	###API for random macAddress ###
	def random_macaddress(self, args= [], db = database()):
		"""
		:param seperator: ":"  "-"
		"""
		if args:
			seperator = random.choice(args)
		else:
			seperator = ":"

		template = string.digits + "ABCDEF"
		mac = ""
		for i in range(6):
			mac += ''.join(random.choice(template) for _ in range(2))
			mac += seperator
		return mac[0:-1]

	###API for random version ###
	def random_version(self, args= [], db = database()):
		min = 2
		max = 4
		if args:
			min, max = self.wrap(args, min, max)

		lenth = random.randint(min, max)
		version = ""
		for i in range(lenth):
			version += str(random.randint(1, 20))
			version += "."
		return version[0:-1]

	###API for random bitcoinAddress ###
	def random_bitcoinaddress(self, args= [], db = database()):
		template = string.digits + string.ascii_lowercase
		bit = ""
		for i in range(42):
			bit += random.choice(template)
		return bit

	###API for random creditCard ###
	def random_creditcard(self, args= [], db = database()):
		"""
		:param credit_type:
			'visa'
			'visa-electron'
			'americanexpress'
			'china-unionpay'
			'mastercard'
			'maestro'
			'diners-club-carte-blanche'
			'diners-club-international'
			'diners-club-us-ca'
			'jcb'
			'diners-club-enroute'
			'interpayment'
			'bankcard'
			'laser'
			'switch'
			'other'
		"""
		credit_type = args
		if credit_type ==[]:
			credit_type = []
			for i in range(random.randint(2, 8)):
				credit_type.append(self.random_creditcardtype())
		template = []
		if 'visa' in credit_type:
			template.append("4### #### #### ####")
		if 'visa-electron' in credit_type:
			template.append(
				str(self.random_randomlist(args=[4026, 4405, 4508, 4844, 4913, 4917])) + " #### #### ####")
		if 'americanexpress' in credit_type:
			template.append(str(self.random_randomlist(args=[34, 37])) + "## ###### #####")
		if 'china-unionpay' in credit_type:
			template.append("62## ###### #####")
		if 'mastercard' in credit_type:
			template.append(str(random.randint(51, 55)) + "## #### #### ####")
		if 'maestro' in credit_type:
			template.append(str(self.random_randomlist(
				args=[5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 6390])) + " #### #### ####")
		if 'diners-club-carte-blanche' in credit_type:
			template.append(str(random.randint(300, 305)) + "# ###### ####")
		if 'diners-club-international' in credit_type:
			template.append(str(self.random_randomlist(args=[300, 301, 302, 303, 304, 305, 309])) + "# ###### ####")
		if 'diners-club-us-ca' in credit_type:
			template.append(str(self.random_randomlist(args=[54, 55])) + "## #### #### ####")
		if 'jcb' in credit_type:
			template.append(str(random.randint(3528, 3589)) + " #### #### ####")
		if 'diners-club-enroute' in credit_type:
			template.append(str(self.random_randomlist(args=[2014, 2149])) + " ####### ####")
		if 'interpayment' in credit_type:
			template.append("636# #### ####")
		if 'bankcard' in credit_type:
			template.append("5610 #### ####")
		if 'laser' in credit_type:
			template.append(str(self.random_randomlist(args=[6304, 6706, 6771, 6709])) + "#### #### ####")
		if 'switch' in credit_type:
			template.append(str(self.random_randomlist(args=[4903, 4905, 4911, 4936, 6333, 6759])) + "#### #### ####")
		if template == []:
			template = "#### #### #### ####"

		credit_number = ""
		random_template = random.choice(template)
		for n in random_template:
			if n == "#":
				credit_number += str(random.randint(0, 9))
			else:
				credit_number += str(n)
		return credit_number

	###API for random date ###
	def random_date(self, args= [], db = database()):
		min = "2000-01-01"
		max = "2030-12-31"
		sqltime = ""
		if args:
			try:
				minYear, minMonth, minDay = re.split('-', args[0])
			except:
				minYear, minMonth, minDay = re.split('-', min)

			try:
				maxYear, maxMonth, maxDay = re.split('-', args[1])
			except:
				maxYear, maxMonth, maxDay = re.split('-', max)

			format = args[-1]
			if format == "sqltime":
				format = "dd/mm/yyyy"
				sqltime = self.random_sqltime()
			elif re.findall("\d", format):
				format = "dd/mm/yyyy"
		else:
			minYear, minMonth,minDay = re.split('-', min)
			maxYear, maxMonth, maxDay = re.split('-', max)
			format = "dd/mm/yyyy"
		tmpY = str(random.randint(int(minYear), int(maxYear)))

		if minYear == maxYear:
			tmpM = int(random.randint(int(minMonth), int(maxMonth)))
		else:
			tmpM = random.randint(1, 12)

		while True:
			dd = random.randint(1, calendar.mdays[tmpM])
			if dd >= int(minDay) and dd <= int(maxDay):
				break
		if len(str(dd)) == 1:
			dd = '0' + str(dd)

		date = ""
		tmpM = str(tmpM)
		if "mm" in format:
			if len(str(tmpM)) == 1:
				tmpM = '0' + str(tmpM)
			date = re.sub("mm", tmpM, format)
		else:
			tmpM = calendar.month_name[int(tmpM)][:3]
			date = re.sub("Mth", tmpM, format)

		date = re.sub("dd", str(dd), date)

		date = re.sub("yyyy", tmpY, date)
		return date + sqltime

	def random_sqltime(self, args= [], db = database()):
		h = str(random.randint(0,23))
		if len(h) == 1:
			h = '0' + h

		m = str(random.randint(0,59))
		if len(m) == 1:
			m = '0' + m

		s = str(random.randint(0, 59))
		if len(s) == 1:
			s = '0' + s

		time = " " + h + ":" + m + ":" + s
		return time

	###API for random fileNameWithExtension ###
	def random_filenamewithextension(self, args= [], db = database()):
		return self.random_filename() + "." + self.random_fileextension()

	###API for random hexColorCode ###
	def random_hexcolorcode(self, args= [], db = database()):
		template = string.digits + "ABCDEF"
		return "#" + ''.join(random.choice(template) for _ in range(6))

	###API for random SHA256 ###
	def random_sha256(self, args= [], db = database()):
		template = string.digits + "abcdef"
		return ''.join(random.choice(template) for _ in range(64))

	###API for random phoneNumber ###
	def random_phonenumber(self, args= [], db = database()):
		"""
		:param format:
			"0## ### ####"
			"0##-###-####"
			"(0##)###-####"
			"+84 ### ### ###"
			"		
		"""
		if args:
			format = random.choice(args)
		else:
			format = "0## ### ####"

		phone = ''
		for n in format:
			if n == "#":
				phone += str(random.randint(0, 9))
			else:
				phone += str(n)
		return phone

	###API for random streetNameAndAddress ###
	def random_streetnameandaddress(self, args= [], db = database()):
		return str(random.randint(1, 999)) + " " + self.random_streetname()

	###API for random password ###
	def random_password(self, args= [], db = database()):
		"""
		:param min:
		:param max:

		"""
		min = 8
		max = 12
		if args:
			min, max = self.wrap(args, min, max)

		template = string.digits + string.ascii_lowercase + string.ascii_uppercase + '!@#$%^&*'
		len = random.randint(min, max)
		result = random.choice('!@#$%^&*')
		result += random.choice(string.digits)
		result += random.choice(string.ascii_lowercase)
		result += random.choice(string.ascii_uppercase)
		for i in range(4,len):
			result += random.choice(template)
  
		return result
	###API for random number ###
	def random_number(self, args= [], db = database()):

		min = 8
		max = 12
		if args:
			min, max = self.wrap(args, min, max)

		return random.randint(min, max)

	###API for random time ###
	def random_time(self, args= [], db = database()):
		"""
		:param format:
			"12 Hour"
			"24 Hour"
		"""
		if args:
			format = random.choice(args)
		else:
			format = "12 Hour"

		h = str(random.randint(1, int(format[:2]) - 1))
		m = str(random.randint(0, 59))
		if len(m) == 1:
			m = '0' + m
		if format == "12 Hour":
			period = self.random_randomlist(["AM", "PM"])
		else:
			period = ""
		return h + ":" + m + " " + period

	###API for random id ###
	def random_id(self, args= [], db = database()):

		staic = args[0]
		dynamic = args[1]
		lenofStr = args[2]

		if staic == "" and dynamic == "" and lenofStr == "":
			return self.random_number(args=[0,99999999])
		else:
			random_template = ""
			if "numberrow" in dynamic:
				return staic+"{numberrow}"
			if "number" in dynamic:
				random_template += string.digits
			if "character" in dynamic:
				random_template += string.ascii_uppercase
			if dynamic == "":
				return self.random_number(args=[0, 99999999])

			if lenofStr == "":
				lenofStr = 0
			else:
				lenofStr = int(lenofStr)

			for i in range(int(lenofStr)):
				staic += random.choice(random_template)
			return staic

	###API for random number row ###
	def random_numberrow(self, args= [], db = database()):
		return self.random_randomlist(["{numberrow}"])

	###API for random text ###
	def random_text(self, args= [], db = database()):
		if args[0] != "":
			return args[0]
		else:
			return "This is paragraph"

	###API for random uuid ###
	def random_uuid(self, args= [], db = database()):
		template = "########-####-####-####-############"
		result = ""
		for char in template:
			if char == "#":
				result += random.choice(string.digits + "abcdef")
			else:
				result += "-"
		return result

	# def random_userformat(self, args):
	# 	"""
	# 	:param args: args[0]: hardcode
	# 				 args[1]: softcode
	# 	:return:
	# 	"""
	# 	result = args[0]
	# 	for c in args[1]:
	# 		if c in string.digits:
	# 			result += random.choice(string.digits)
	# 		elif c in string.ascii_lowercase:
	# 			result += random.choice(string.ascii_lowercase)
	# 		elif c in string.ascii_uppercase:
	# 			result += random.choice(string.ascii_uppercase)
	# 		elif c in string.punctuation:
	# 			result += random.choice(string.punctuation)
	# 	return result


		###API for random abc ###
	def random_abc(self, args= [], db = database()):
		return random.choice(db.abc)
