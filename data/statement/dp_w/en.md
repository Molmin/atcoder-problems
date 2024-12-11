Score : $100$ points

## Problem Statement

Consider a string of length $N$ consisting of `0` and `1`.
The score for the string is calculated as follows:

- For each $i$ ($1 \leq i \leq M$), $a_i$ is added to the score if the string contains `1` at least once between the $l_i$-th and $r_i$-th characters (inclusive).

Find the maximum possible score of a string.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq l_i \leq r_i \leq N$
- $|a_i| \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $l_1$ $r_1$ $a_1$
> 
> $l_2$ $r_2$ $a_2$
> 
> $:$
> 
> $l_M$ $r_M$ $a_M$

## Output

Print the maximum possible score of a string.

```input1
5 3
1 3 10
2 4 -10
3 5 10
```

```output1
20
```

The score for `10001` is $a_1 + a_3 = 10 + 10 = 20$.

```input2
3 4
1 3 100
1 1 -10
2 2 -20
3 3 -30
```

```output2
90
```

The score for `100` is $a_1 + a_2 = 100 + (-10) = 90$.

```input3
1 1
1 1 -10
```

```output3
0
```

The score for `0` is $0$.

```input4
1 5
1 1 1000000000
1 1 1000000000
1 1 1000000000
1 1 1000000000
1 1 1000000000
```

```output4
5000000000
```

The answer may not fit into a 32-bit integer type.

```input5
6 8
5 5 3
1 1 10
1 6 -8
3 6 5
3 4 9
5 5 -2
1 3 -6
4 6 -7
```

```output5
10
```

For example, the score for `101000` is $a_2 + a_3 + a_4 + a_5 + a_7 = 10 + (-8) + 5 + 9 + (-6) = 10$.