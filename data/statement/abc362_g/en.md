Score : $575$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.

You are also given $Q$ queries to process sequentially. The $i$-th query is described as follows:

- A string $T_i$ consisting of lowercase English letters is given. Print the number of substrings of $S$ that equal $T_i$. Two substrings are distinguished if they are taken from different positions, even if they are equal as strings.

## Constraints

- $1 \leq |S| \leq 5 \times 10^5$
- $1 \leq Q \leq 5 \times 10^5$
- $1 \leq |T_i| \leq |S|$
- $\displaystyle \sum_{i=1}^Q |T_i| \leq 5 \times 10^5$
- $S$ and $T_i$ are strings consisting of lowercase English letters.
- $Q$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $Q$
> 
> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
missisippi
5
i
s
a
is
missisippi
```

```output1
4
3
0
2
1
```

Let $S[l:r]$ denote the substring of $S$ from the $l$-th character through the $r$-th character.

- For the 1st query, four substrings of $S$ equal `i`: $S[2:2], S[5:5], S[7:7], S[10:10]$.
- For the 2nd query, three substrings of $S$ equal `s`: $S[3:3], S[4:4], S[6:6]$.
- For the 3rd query, no substrings of $S$ match `a`.
- For the 4th query, two substrings of $S$ equal `is`: $S[2:3], S[5:6]$.
- For the 5th query, one substring of $S$ equals `missisippi`: $S[1:10]$.

```input2
aaaaaa
6
a
aa
aaa
aaaa
aaaaa
aaaaaa
```

```output2
6
5
4
3
2
1
```