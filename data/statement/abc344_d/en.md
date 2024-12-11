Score: $425$ points

## Problem Statement

You initially have an empty string $S$.<br>
Additionally, there are bags $1, 2, \dots, N$, each containing some strings.<br>
Bag $i$ contains $A_i$ strings $S_{i,1}, S_{i,2}, \dots, S_{i,A_i}$.

You will repeat the following steps for $i = 1, 2, \dots, N$:

- Choose and perform one of the following two actions:-   - Pay $1$ yen, select exactly one string from bag $i$, and concatenate it to the end of $S$.
-   - Do nothing.

Given a string $T$, find the minimum amount of money required to make the final $S$ equal $T$.<br>
If there is no way to make the final $S$ equal $T$, print `-1`.

## Constraints

- $T$ is a string consisting of lowercase English letters with length between $1$ and $100$, inclusive.
- $N$ is an integer between $1$ and $100$, inclusive.
- $A_i$ is an integer between $1$ and $10$, inclusive.
- $S_{i,j}$ is a string consisting of lowercase English letters with length between $1$ and $10$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $N$
> 
> $A_1$ $S_{1,1}$ $S_{1,2}$ $\dots$ $S_{1,A_1}$
> 
> $A_2$ $S_{2,1}$ $S_{2,2}$ $\dots$ $S_{2,A_2}$
> 
> $\vdots$
> 
> $A_N$ $S_{N,1}$ $S_{N,2}$ $\dots$ $S_{N,A_N}$

## Output

Print the answer as an integer.

```input1
abcde
3
3 ab abc abcd
4 f c cd bcde
2 e de
```

```output1
2
```

For example, doing the following makes the final $S$ equal $T$ with two yen, which can be shown to be the minimum amount required.

- For $i=1$, select `abc` from bag $1$ and concatenate it to the end of $S$, making $S=$ `abc`.
- For $i=2$, do nothing.
- For $i=3$, select `de` from bag $3$ and concatenate it to the end of $S$, making $S=$ `abcde`.

```input2
abcde
3
2 ab abc
3 f c bcde
1 e
```

```output2
-1
```

There is no way to make the final $S$ equal $T$, so print `-1`.

```input3
aaabbbbcccc
6
2 aa aaa
2 dd ddd
2 ab aabb
4 bbaa bbbc bbb bbcc
2 cc bcc
3 ccc cccc ccccc
```

```output3
4
```