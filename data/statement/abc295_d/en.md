Score : $400$ points

## Problem Statement

The string `20230322` can be rearranged into `02320232`, which is a repetition of `0232` twice.<br>
Similarly, a string consisting of digits is said to be **happy** when it can be rearranged into (or already is) a repetition of some string twice.<br>
You are given a string $S$ consisting of digits. Find the number of pairs of integers $(l,r)$ satisfying all of the following conditions.

- $1 \le l \le r \le |S|$. ($|S|$ is the length of $S$.)
- The (contiguous) substring formed of the $l$-th through $r$-th characters of $S$ is happy.

## Constraints

- $S$ is a string consisting of digits whose length is between $1$ and $5 \times 10^5$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print an integer representing the answer.

```input1
20230322
```

```output1
4
```

We have $S=$ `20230322`.  

Here are the four pairs of integers $(l,r)$ that satisfy the condition: $(1,6)$, $(1,8)$, $(2,7)$, and $(7,8)$.

```input2
0112223333444445555556666666777777778888888889999999999
```

```output2
185
```

$S$ may begin with `0`.

```input3
3141592653589793238462643383279502884197169399375105820974944
```

```output3
9
```