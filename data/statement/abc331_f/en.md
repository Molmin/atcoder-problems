Score : $525$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.<br>
Process $Q$ queries described below in the order they are given.<br>
There are two types of queries:

- `1 x c` : Change the $x$-th character of $S$ to the lowercase English letter $c$.
- `2 L R` : If the substring formed by the $L$-th through $R$-th characters of $S$ is a palindrome, print `Yes`; otherwise, print `No`.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq Q \leq 10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $1 \leq x \leq N$
- $c$ is a lowercase English letter.
- $1 \leq L \leq R \leq N$
- $N, Q, x, L, R$ are integers.

## Input

The input is given from Standard Input in the following format. Here, $\text{query}_i$ is the $i$-th query to be processed.

> $N$ $Q$
> 
> $S$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

Each query is given in one of the following formats:

> $1$ $x$ $c$
> $2$ $L$ $R$

## Output

Follow the instructions in the problem statement and print the answers to the queries, separated by newlines.

```input1
7 8
abcbacb
2 1 5
2 4 7
2 2 2
1 5 c
2 1 5
2 4 7
1 4 c
2 3 6
```

```output1
Yes
No
Yes
No
Yes
Yes
```

Initially, $S =$ `abcbacb`.<br>
For the first query, the string formed by the $1$-st through $5$-th characters of $S$ is `abcba`, which is a palindrome. Thus, print `Yes`.<br>
For the second query, the string formed by the $4$-th through $7$-th character of $S$ is `bacb`, which is not a palindrome. Thus, print `No`.<br>
For the third query, the string formed by the $2$-nd through $2$-nd character of $S$ is `b`, which is a palindrome. Thus, output `Yes`.<br>
For the fourth query, change the $5$-th character of $S$ to `c`. $S$ becomes `abcbccb`.<br>
For the fifth query, the string formed by the $1$-st through $5$-th character of $S$ is `abcbc`, which is not a palindrome. Thus, output `No`.<br>
For the sixth query, the string formed by the $4$-th through $7$-th character of $S$ is `bccb`, which is a palindrome. Thus, output `Yes`.<br>
For the seventh query, change the $4$-th character of $S$ to `c`. $S$ becomes `abccccb`.<br>
For the eighth query, the string formed by the $3$-rd through $6$-th character of `cccc`, which is a palindrome. Thus, output `Yes`.