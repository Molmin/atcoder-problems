Score : $700$ points

## Problem Statement

There are $N$ strings arranged in a row.
It is known that, for any two adjacent strings, the string to the left is lexicographically smaller than the string to the right.
That is, $S_1&lt;S_2&lt;...&lt;S_N$ holds lexicographically, where $S_i$ is the $i$-th string from the left.

At least how many different characters are contained in $S_1,S_2,...,S_N$, if the length of $S_i$ is known to be $A_i$?

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Note

The strings do not necessarily consist of English alphabet; there can be arbitrarily many different characters (and the lexicographic order is defined for those characters).

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum possible number of different characters contained in the strings.

```input1
3
3 2 1
```

```output1
2
```

The number of different characters contained in $S_1,S_2,...,S_N$ would be $3$ when, for example, $S_1=$`abc`, $S_2=$`bb` and $S_3=$`c`.

However, if we choose the strings properly, the number of different characters can be $2$.

```input2
5
2 3 2 1 2
```

```output2
2
```