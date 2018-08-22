# NgrxActionsExperiments

## The problem
We're using the ngrx-actions library for defining our NgRx actions, effects, stores and reducers.  
The problem with NgRx in generally is that you have to write a lot of boilerplate code, ngrx-actions makes this a little bit better.  
  
Assume that we have one page in our dashboard that needs to receive a few statistics over a few departments.  
All statistics are the same, but the API call in the back only differs by one parameter: department.  
You'll end up by creating a (for example) FETCH-[DEPARTMENT]-EMPLOYEES-state SET-[DEPARTMENT]-EMPLOYEES for every single department,  
whilst the underlying logic is almost the same, causing lots of code duplicates.  


