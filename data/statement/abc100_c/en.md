Score: $300$ points

## Problem Statement

As AtCoder Beginner Contest 100 is taking place, the office of AtCoder, Inc. is decorated with a sequence of length $N$, $a =${$a_1, a_2, a_3, ..., a_N$}.<br>
Snuke, an employee, would like to play with this sequence.

Specifically, he would like to repeat the following operation as many times as possible:

```plain
For every $i$ satisfying $1 \leq i \leq N$, perform one of the following: "divide $a_i$ by $2$" and "multiply $a_i$ by $3$".  
Here, choosing "multiply $a_i$ by $3$" for every $i$ is not allowed, and the value of $a_i$ after the operation must be an integer.
```

At most how many operations can be performed?

## Constraints

- $N$ is an integer between $1$ and $10 \ 000$ (inclusive).
- $a_i$ is an integer between $1$ and $1 \ 000 \ 000 \ 000$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $a_3$ $...$ $a_N$

## Output

Print the maximum number of operations that Snuke can perform.

```input1
3
5 2 4
```

```output1
3
```

The sequence is initially ${5, 2, 4}$. Three operations can be performed as follows:

- First, multiply $a_1$ by $3$, multiply $a_2$ by $3$ and divide $a_3$ by $2$. The sequence is now ${15, 6, 2}$.
- Next, multiply $a_1$ by $3$, divide $a_2$ by $2$ and multiply $a_3$ by $3$. The sequence is now ${45, 3, 6}$.
- Finally, multiply $a_1$ by $3$, multiply $a_2$ by $3$ and divide $a_3$ by $2$. The sequence is now ${135, 9, 3}$.

```input2
4
631 577 243 199
```

```output2
0
```

No operation can be performed since all the elements are odd. Thus, the answer is $0$.

```input3
10
2184 2126 1721 1800 1024 2528 3360 1945 1280 1776
```

```output3
39
```