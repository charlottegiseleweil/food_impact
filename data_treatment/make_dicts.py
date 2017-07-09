import pandas as pd
import numpy as np
import os
import math
import matplotlib.pyplot as plt


os.chdir('../data')
df = pd.read_excel("Figure8.xlsx")
df.as_matrix()

nb_entries = df.shape[0]
del df['Author'], df['Year']

#Create lists of food groups and food items -
groups = list() #Food groups
for i in range(0,nb_entries):
	if df['Group'][i] not in groups:
		groups.append(df['Group'][i])
groups = [item.encode('utf-8') for item in groups]

subgroups = list() #Food items
for i in range(0,nb_entries):
	if df['Food_item'][i] not in subgroups:
		subgroups.append(df['Food_item'][i])
subgroups = [item.encode('utf-8') for item in subgroups]

#GHG dict
GHG = {}
for food_group in groups:
	n=0
	n_sum=0
	for i in range(0,nb_entries):
		if df['Group'][i] == food_group and not math.isnan(df['GHG'][i]):
			n_sum += df['GHG'][i]
			n+=1
	GHG[food_group] = n_sum/n

print GHG
print GHG.keys()
print GHG.values()

#Plot
x_axis = np.linspace(0,12,len(groups))

plt.bar(x_axis, GHG.values(), align='center')
plt.xticks(x_axis, groups)
plt.show()
#plt.bar(GHG.keys(),GHG.values())


