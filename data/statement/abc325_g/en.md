Score : $575$ points

## Problem Statement

You are given a string $S$. Find the minimum length of a string that can be obtained by performing the following operation on the string $S$ zero or more times.

- Choose a contiguous occurrence of `of` in the string and an integer $i$ between $0$ and $K$, inclusive. Then, remove the `of` and the following $i$ characters from the string.

## Constraints

- $0 \leq K &lt; |S| \leq 300$
- $K$ is an integer.
- $S$ is a string consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the answer.

```input1
keyofscience
3
```

```output1
7
```

By choosing the `of` formed by the fourth and fifth characters and setting $i = 3$, you can remove `ofsci` from `keyofscience` and get `keyence`.<br>
It is impossible to reduce the length of the string to $6$ or less by repeating the operation, so the answer is $7$.

```input2
oofsifffence
3
```

```output2
2
```

```input3
ooofff
5
```

```output3
0
```

```input4
okeyencef
4
```

```output4
9
```