def isAnagram(a, b):
	a = a.lower()
	b = b.lower()
	for char in a:
		if b.count(char) != a.count(char):
			return False
	return True
print(isAnagram(input("Enter the first string:\n"), input("Enter the second String:\n")))

