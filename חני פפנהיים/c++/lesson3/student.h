#pragma once
using namespace std;
#include <iostream>
#include<string>
class student
{
	string name;
	int grades[10];
	
public:
	 student(string) ;
     student(string, int[10]) ;
	 void Print();
	 int Avg();
	 int GetAt(int i);
	 void SetAt(int i, int val);
	 bool EqualsAvg(student other);
};


