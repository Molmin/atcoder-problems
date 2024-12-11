Score : $200$ points

## Problem Statement

You are given three strings $S_1, S_2, S_3$ consisting of lowercase English letters, and a string $T$ consisting of `1`, `2`, `3`.

Concatenate the three strings according to the characters in $T$ and print the resulting string. Formally, conform to the following instructions.

- For each integer $i$ such that $1 \leq i \leq |T|$, let the string $s_i$ be defined as follows:-   - $S_1$, if the $i$-th character of $T$ is `1`;
-   - $S_2$, if the $i$-th character of $T$ is `2`;
-   - $S_3$, if the $i$-th character of $T$ is `3`.
- Concatenate the strings $s_1, s_2, \dots, s_{|T|}$ in this order and print the resulting string.

## Constraints

- $1 \leq |S_1|, |S_2|, |S_3| \leq 10$
- $1 \leq |T| \leq 1000$
- $S_1$, $S_2$, and $S_3$ consist of lowercase English letters.
- $T$ consists of `1`, `2`, and `3`.

## Input

Input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$
> 
> $S_3$
> 
> $T$

## Output

Print the answer.

```input1
mari
to
zzo
1321
```

```output1
marizzotomari
```

We have $s_1 =$ `mari`, $s_2 =$ `zzo`, $s_3 =$ `to`, $s_4 =$ `mari`. Concatenate these and print the resulting string: `marizzotomari`.

```input2
abra
cad
abra
123
```

```output2
abracadabra
```

```input3
a
b
c
1
```

```output3
a
```