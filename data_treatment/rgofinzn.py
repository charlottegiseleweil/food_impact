def retrieve_name(var):
    callers_local_vars = inspect.currentframe().f_back.f_locals.items()
    return [var_name for var_name, var_val in callers_local_vars if var_val is var]


Acidification = {}
GHG = {}

dicts = [Acidification, GHG]

dicts_name = retrieve_name(dicts)
print dicts_name

GHG['meat']= 66
GHG['veg'] =3

groups = ['meat','veg']
for i in groups:
	Acidification[i] = 25

for i in dicts:
	print i,i['meat'],i['veg']

	#Conversion dataframes types.. 
	#https://pandas.pydata.org/pandas-docs/stable/dsintro.html#conversion-to-dataframe




