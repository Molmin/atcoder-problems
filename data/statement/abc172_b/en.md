Score : $200$ points

## Problem Statement

Given are strings $S$ and $T$. Consider changing $S$ to $T$ by repeating the operation below. Find the minimum number of operations required to do so.

Operation: Choose one character of $S$ and replace it with a different character.

## Constraints

- $S$ and $T$ have lengths between $1$ and $2\times 10^5$ (inclusive).
- $S$ and $T$ consists of lowercase English letters.
- $S$ and $T$ have equal lengths.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print the answer.

```input1
cupofcoffee
cupofhottea
```

```output1
4
```

We can achieve the objective in four operations, such as the following:

- First, replace the sixth character `c` with `h`.
- Second, replace the eighth character `f` with `t`.
- Third, replace the ninth character `f` with `t`.
- Fourth, replace the eleventh character `e` with `a`.

```input2
abcde
bcdea
```

```output2
5
```

```input3
apple
apple
```

```output3
0
```

No operations may be needed to achieve the objective.