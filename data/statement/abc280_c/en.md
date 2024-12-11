Score : $300$ points

## Problem Statement

You are given strings $S$ and $T$.  $S$ consists of lowercase English letters, and $T$ is obtained by inserting a lowercase English letter into $S$.

Find the position of the inserted character in $T$.<br>
If there are multiple candidates, find any of them.

## Constraints

- $1 \leq |S| \leq 5\times 10^5$
- $S$ consists of lowercase English letters.
- $T$ is obtained by inserting a lowercase English letter into $S$.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print an integer $i$, representing that the inserted character is the $i$-th character from the beginning of $T$.  If there are multiple possible answers, printing any of them is accepted.  

```input1
atcoder
atcorder
```

```output1
5
```

The $5$-th character from the beginning of $T$, `r`, is inserted.

```input2
million
milllion
```

```output2
5
```

One of the $3$-rd, $4$-th, and $5$-th characters from the beginning of $T$ is inserted.
Thus, printing any one of $3$, $4$, and $5$ is accepted.

```input3
vvwvw
vvvwvw
```

```output3
3
```