//Javascript Execution Context
// runs in 2 phases



/* -------------- Execution Context -------------- */

// first - global execution context  (this will bydefault happen)
// kept in this variable 
// for node and browser is different -> browser - window 
// executed in a thread  -single threaded

//second - Functional execution context

//third - Eval execution context


/* -------------- Phases -------------- */

//1. Memory Phase 
// just memory is allocated for all the variables, etc.
// value given to variables in NUll as code is not executed yet
// in function goes the definition (how many variables and all)


//2. Execution Phase
// all values are given to variables

// when we go on a function call, it makes its own seperate new execution context
// in this new, it will have - new variable environment and execution thread
// again in this new box we will have memory phase and execution phase
//and then finally value is returned to global execution context to the variable
// the new execution context is now deleted after its work



/* -------------- Summary -------------- */
// Step 1: Global Execution 
// Step 2: Memory Phase 
// Step 3: Execution Phase 



/* -------------- Call Stack -------------- */
//All the properties of stack
