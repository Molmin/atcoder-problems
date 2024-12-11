Score : $100$ points

## Problem Statement

Takahashi has decided to hold some number of programming contests.<br>
Holding one contest requires one $100$-point problem, one $200$-point problem, one $300$-point problem, and one $400$-point problem.<br>
When he has $A_1$, $A_2$, $A_3$, and $A_4$ drafts of $100$-, $200$-, $300$-, and $400$-point problems, respectively, at most how many contests can he hold?<br>
The same draft can be used only once.

## Constraints

- $1 \le A_i \le 100$ $(1 \le i \le 4)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{7pt} A_4$

## Output

Print an integer representing the maximum number of contests that can be held.  

```input1
5 3 7 11
```

```output1
3
```

By using three drafts for each slot, he can hold three contests.
He has just three drafts for $200$-point problems, so he cannot hold four.

```input2
100 100 1 100
```

```output2
1
```

A contest cannot be held even if there is just one missing slot.