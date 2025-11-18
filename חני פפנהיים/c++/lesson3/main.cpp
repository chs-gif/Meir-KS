#include "Student.h"

void main()
{   //*
	int grades[] = { 100,92,93,84,95,76,97,87,95,94 };
	student s1("chani", grades);
	s1.Print();
	cout << "s1 avg: " << s1.Avg() << "\n";
	s1.SetAt(3, 99);
	cout << "s1 at index 3: " << s1.GetAt(3) << "\n";
	cout << "s1 new avg: " << s1.Avg() << "\n";
	//**
	student *ps = new student("efrat");
	ps->Print();
	cout << "s1 avg: " << ps->Avg() << "\n";
	ps->SetAt(3, 99);
	cout << "s1 at index 3: " << ps->GetAt(3) << "\n";
	cout << "s1 new avg: " << ps->Avg() << "\n";
	//***
	cout << "EqualsAvg s1 & ps: " << ps->EqualsAvg(s1) << endl;


	/*Student s2(s1);
	s2.Print();
	s1.SetAt(2, 0);
	cout << "--s1--\n";
	s1.Print();
	cout << "--s2--\n";
	s2.Print();
	cout << "\n";*/
}