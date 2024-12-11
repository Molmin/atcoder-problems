Score : $500$ points

## Problem Statement

This is an **interactive task**, where your and the judge's programs interact via Standard Input and Output.

You and the judge will follow the procedure below.
The procedure consists of phases $1$ and $2$; phase $1$ is immediately followed by phase $2$.

(Phase $1$)

- The judge decides an integer $N$ between $1$ and $10^9$ (inclusive), which is hidden.
- You print an integer $M$ between $1$ and $110$ (inclusive).
- You also print an integer sequence $A=(A_1,A_2,\ldots,A_M)$ of length $M$ such that $1 \leq A_i \leq M$ for all $i = 1, 2, \ldots, M$.

(Phase $2$)

- The judge gives you an integer sequence $B=(B_1,B_2,\ldots,B_M)$ of length $M$.  Here, $B_i = f^N(i)$.  $f(i)$ is defined by $f(i)=A_i$ for all integers $i$ between $1$ and $M$ (inclusive), and $f^N(i)$ is the integer resulting from replacing $i$ with $f(i)$ $N$ times.
- Based on the given $B$, you identify the integer $N$ that the judge has decided, and print $N$.

After the procedure above, terminate the program immediately to be judged correct.

## Constraints

- $N$ is an integer between $1$ and $10^9$ (inclusive).

## Input and Output

This is an interactive task, where your and the judge's programs interact via Standard Input and Output.

(Phase $1$)

- First, print an integer $M$ between $1$ and $110$ (inclusive).  It must be followed by a newline.

```plain
$M$
```

- Then, print a sequence $A=(A_1,A_2,\ldots,A_M)$ of length $M$ consisting of integers between $1$ and $M$ (inclusive), with spaces in between.  It must be followed by a newline.

```plain
$A_1$ $A_2$ $\ldots$ $A_M$
```

(Phase $2$)

- First, an integer sequence $B=(B_1,B_2,\ldots,B_M)$ of length $M$ is given from the input.

```plain
$B_1$ $B_2$ $\ldots$ $B_M$
```

- Find the integer $N$ and print it.  It must be followed by a newline.

```plain
$N$
```

If you print something illegal, the judge prints `-1`.  In that case, your submission is already considered incorrect.  Since the judge program terminates at this point, it is desirable that your program terminates too.

## Notes

- <span style="color:red">**After each output, add a newline and then flush Standard Output.  Otherwise, you may get a TLE verdict.**</span>
- **If an invalid output is printed during the interaction, or if the program terminates halfway, the verdict will be indeterminate.**
- After you print the answer (or you receive `-1`), immediately terminate the program normally. Otherwise, the verdict will be indeterminate.
- Note that an excessive newline is also considered an invalid input.

## Sample Interaction

The following is a sample interaction with $N = 2$.

Input
Output
Description

 The judge has decided that $N=2$.  $N$ is hidden: it is not given as an input.

`4`
You print $M$.

`2 3 4 4`
You print $A=(2,3,4,4)$.

`3 4 4 4`

 $f^2(1)=3,f^2(2)=4,f^2(3)=4$, and $f^2(4)=4$, so the judge gives $B=(3,4,4,4)$ to your program.

`2`
Based on $B$, you have identified that $N=2$.  Print $N$ and terminate the program normally.