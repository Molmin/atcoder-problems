Score : $600$ points

## Problem Statement

We have a string $S$ consisting of `0`, `1`, and `?`. Let $T$ be the concatenation of $K$ copies of $S$.<br>
By replacing each `?` in $T$ with `0` or `1`, we can obtain $2^{Kq}$ strings, where $q$ is the number of `?`s in $S$. Solve the problem below for each of these strings and find the sum of all the answers, modulo $(10^9+7)$.

Let $T'$ be the string obtained by replacing `?` in $T$. We will repeatedly do the operation below to make all the characters in $T$ the same. At least how many operations are needed for this?

- Choose integers $l$ and $r$ such that $1 \le l \le r \le |T'|$, and invert the $l$-th through $r$-th characters of $T$: from `0` and `1` and vice versa.

## Constraints

- $1 \le |S| \le 10^5$
- $1 \le K \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the answer as an integer.

```input1
101
2
```

```output1
2
```

We have $T=$ `101101`, which does not contain `?`, so we just need to solve the problem for the only $T'=$ `101101`.<br>
We can make all the characters the same in two operations as, for example, `101101` $\rightarrow$ `110011` $\rightarrow$ `111111`.<br>
We cannot make all the characters the same in one or fewer operations.

```input2
?0?
1
```

```output2
3
```

We have four candidates for $T'$: `000`, `001`, `100`, and `101`.

```input3
10111?10??1101??1?00?1?01??00010?0?1??
998244353
```

```output3
235562598
```

Since the answer can be enormous, find it modulo $(10^9+7)$.