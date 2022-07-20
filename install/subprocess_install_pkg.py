import subprocess

subprocess.run("pip install flask", shell = True)
subprocess.run("pip install flask_cors",shell = True)

print("================================================")
print("==========SUCCESFULL INSTALL PACKAGE============")
print("================================================")



print("================================================")
print("===============SERVER IS RUNNING================")
print("================================================")
runServer = subprocess.run("py ./api/index.py",shell = True)






