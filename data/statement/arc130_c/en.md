Score : $500$ points

## Problem Statement

Given are positive integers $a, b$, where none of the digits is $0$.

Permute the digits of each of $a$ and $b$ so that the sum of the digits in $a+b$ is minimized.

## Constraints

- $1\leq a, b&lt; 10^{100000}$
- None of the digits of $a$ and $b$ is $0$.

## Input

Input is given from Standard Input in the following format:

> $a$
> 
> $b$

## Output

After permuting the digits of each of $a$ and $b$ so that the sum of the digits in $a+b$ is minimized, print $a$ in the first line and $b$ in the second line.

If multiple solutions exist, printing any of them will be accepted.

```input1
253
286
```

```output1
532
268
```

We have $532 + 268 = 800$, whole digits sum to $8+0+0=8$.

Other solutions will also be accepted, such as $(a, b) = (325, 682)$.

```input2
345
556
```

```output2
435
565
```

We have $435+565=1000$, whole digits sum to $1+0+0+0=1$.

```input3
123
987987
```

```output3
312
799788
```

We have $312 + 799788 = 800100$, whole digits sum to $8+0+0+1+0+0=9$.

```input4
11111111111111111111
111111111111111111111111111111
```

```output4
11111111111111111111
111111111111111111111111111111
```