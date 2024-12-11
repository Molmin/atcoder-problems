Score : $600$ points

## Problem Statement

We have an integer sequence $A$ of length $N$.<br>
You will process $Q$ queries on this sequence. In the $i$-th query, given values $T_i$, $X_i$, and $Y_i$, do the following:

- If $T_i = 1$, replace $A_{X_i}$ with $A_{X_i} \oplus Y_i$.
- If $T_i = 2$, print $A_{X_i} \oplus A_{X_i + 1} \oplus A_{X_i + 2} \oplus \dots \oplus A_{Y_i}$.

Here, $a \oplus b$ denotes the bitwise XOR of $a$ and $b$.

What is bitwise XOR?

The bitwise XOR of integers $A$ and $B$, $A \oplus B$, is defined as follows:

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if either $A$ or $B$, but not both, has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3 \oplus 5 = 6$. (In base two: $011 \oplus 101 = 110$.)

## Constraints

- $1 \le N \le 300000$
- $1 \le Q \le 300000$
- $0 \le A_i \lt 2^{30}$
- $T_i$ is $1$ or $2$.
- If $T_i = 1$, then $1 \le X_i \le N$ and $0 \le Y_i \lt 2^{30}$.
- If $T_i = 2$, then $1 \le X_i \le Y_i \le N$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots \hspace{5pt} A_N$
> 
> $T_1$ $X_1$ $Y_1$
> 
> $T_2$ $X_2$ $Y_2$
> 
> $T_3$ $X_3$ $Y_3$
> 
> $\hspace{22pt} \vdots$
> 
> $T_Q$ $X_Q$ $Y_Q$

## Output

For each query with $T_i = 2$ in the order received, print the response in its own line.

```input1
3 4
1 2 3
2 1 3
2 2 3
1 2 3
2 2 3
```

```output1
0
1
2
```

In the first query, we print $1 \oplus 2 \oplus 3 = 0$.<br>
In the second query, we print $2 \oplus 3 = 1$.<br>
In the third query, we replace $A_2$ with $2 \oplus 3 = 1$.<br>
In the fourth query, we print $1 \oplus 3 = 2$.

```input2
10 10
0 5 3 4 7 0 0 0 1 0
1 10 7
2 8 9
2 3 6
2 1 6
2 1 10
1 9 4
1 6 1
1 6 3
1 1 7
2 3 5
```

```output2
1
0
5
3
0
```