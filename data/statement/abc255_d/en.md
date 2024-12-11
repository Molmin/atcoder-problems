Score : $400$ points

## Problem Statement

You are given a sequence of length $N$: $A=(A_1,A_2,\dots,A_N)$. The following action on this sequence is called an *operation*.

- First, choose an integer $i$ such that $1 \le i \le N$.
- Next, choose and do one of the following.-   - Add $1$ to $A_i$.
-   - Subtract $1$ from $A_i$.

Answer $Q$ questions.<br>
The $i$-th question is the following.

- Consider performing zero or more operations to change every element of $A$ to $X_i$. Find the minimum number of operations required to do so.

## Constraints

- All values in input are integers.
- $1 \le N,Q \le 2 \times 10^5$
- $0 \le A_i \le 10^9$
- $0 \le X_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $X_1$
> 
> $X_2$
> 
> $\vdots$
> 
> $X_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer to the $i$-th question as an integer.

```input1
5 3
6 11 2 5 5
5
20
0
```

```output1
10
71
29
```

We have $A=(6,11,2,5,5)$ and three questions in this input.

For the $1$-st question, you can change every element of $A$ to $5$ in $10$ operations as follows.

- Subtract $1$ from $A_1$.
- Subtract $1$ from $A_2$ six times.
- Add $1$ to $A_3$ three times.

It is impossible to change every element of $A$ to $5$ in $9$ or fewer operations.

For the $2$-nd question, you can change every element of $A$ to $20$ in $71$ operations.

For the $3$-rd question, you can change every element of $A$ to $0$ in $29$ operations.

```input2
10 5
1000000000 314159265 271828182 141421356 161803398 0 777777777 255255255 536870912 998244353
555555555
321654987
1000000000
789456123
0
```

```output2
3316905982
2811735560
5542639502
4275864946
4457360498
```

The output may not fit into $32$-bit integers.