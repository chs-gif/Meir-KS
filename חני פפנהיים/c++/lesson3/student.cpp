#include "student.h"
#pragma once
using namespace std;
#include <iostream>
//#include<string>
student::student(string name) {
	this->name = name;
	for (int i = 0; i < 10; i++)
	{
		this->grades[i] = 0;
	}
};

student::student(string name, int grades[10])
{
	this->name = name;
	for (int i = 0; i < 10; i++)
	{
		this->grades[i] = grades[i];
	}
};

void student::Print()
{
	cout << "student name: " << this->name << "\n";
	cout << "student grades: ";
	for (int i = 0; i < 10; i++)
	{
		cout << this->grades[i] << ", ";
	}
	cout << "\n";
}

int student::Avg()
{
	int count = 0;
	for (int i = 0; i < 10; i++)
	{
		count += this->grades[i];
	}
	return count / 10;
}

int student::GetAt(int i)
{
	return this->grades[i];
}

void student::SetAt(int i, int val)
{
	this->grades[i] = val;
}

bool student::EqualsAvg(student other)
{
	return this->Avg()==other.Avg();
}
