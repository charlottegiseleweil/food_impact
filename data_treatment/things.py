#Remove unicode character 'u'
my_list = [u'Dairy', u'Eggs', u'Fresh Produce']
list_no_u = [item.encode('utf-8') for item in my_list]

#