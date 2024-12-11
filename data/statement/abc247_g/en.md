Score : $600$ points

## Problem Statement

There are $N$ competitive programmers.<br>
The $i$-th competitive programmer belongs to University $A_i$, is good at Subject $B_i$, and has a power of $C_i$.

Consider a team consisting of some of the $N$ people.  Let us call such a team a **dream team** if both of the following conditions are satisfied:

- Any two people belonging to the team belong to different universities.
- Any two people belonging to the team are good at different subjects.

Let $k$ be the maximum possible number of members of a dream team.  For each $i=1,2,\ldots,k$, solve the following question.

Question: find the maximum sum of power of people belonging to a dream team consisting of $i$ people.

## Constraints

- $1 \leq N \leq 3\times 10^4$
- $1 \leq A_i,B_i \leq 150$
- $1 \leq C_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$ $C_N$

## Output

Let $k$ be the maximum possible number of members of a dream team.<br>
Print $k$ in the first line.  Then, print $k$ more lines, each containing the answer to the question for $i=1,2,\ldots,k$, in this order.

```input1
3
1 1 100
1 20 10
2 1 1
```

```output1
2
100
11
```

- The sum of power of members of a dream team consisting of exactly $1$ person is $100$, when the team consists of the $1$-st competitive programmer.
- The sum of power of members of a dream team consisting of exactly $2$ people is $11$, when the team consists of the $2$-nd and the $3$-rd competitive programmers.
- It is impossible to form a dream team consisting of exactly $3$ people.

```input2
10
1 4 142135623
2 6 457513110
3 1 622776601
5 1 961524227
2 2 360679774
2 4 494897427
3 7 416573867
5 2 915026221
1 7 320508075
5 3 851648071
```

```output2
4
961524227
1537802822
2032700249
2353208324
```