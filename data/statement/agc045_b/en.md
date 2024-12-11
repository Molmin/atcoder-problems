Score : $800$ points

## Problem Statement

Given is a string $S$, where each character is `0`, `1`, or `?`.

Consider making a string $S'$ by replacing each occurrence of `?` with `0` or `1` (we can choose the character for each `?` independently).
Let us define the unbalancedness of $S'$ as follows:

- (The unbalancedness of $S'$) $= \max \{$ The absolute difference between the number of occurrences of `0` and `1` between the $l$-th and $r$-th character of $S$ (inclusive) $:\ 1 \leq l \leq r \leq |S|\}$

Find the minimum possible unbalancedness of $S'$.

## Constraints

- $1 \leq |S| \leq 10^6$
- Each character of $S$ is `0`, `1`, or `?`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the minimum possible unbalancedness of $S'$.

```input1
0??
```

```output1
1
```

We can make $S'=$ `010` and achieve the minimum possible unbalancedness of $1$.

```input2
0??0
```

```output2
2
```

```input3
??00????0??0????0?0??00??1???11?1?1???1?11?111???1
```

```output3
4
```