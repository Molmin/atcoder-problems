Score : $100$ points

## Problem Statement

A programming competition site *AtCode* regularly holds programming contests.

The next contest on AtCode is called ABC, which is rated for contestants with ratings less than $1200$.

The contest after the ABC is called ARC, which is rated for contestants with ratings less than $2800$.

The contest after the ARC is called AGC, which is rated for all contestants.

Takahashi's rating on AtCode is $R$. What is the next contest rated for him?

## Constraints

- $0 \leq R \leq 4208$
- $R$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $R$

## Output

Print the name of the next contest rated for Takahashi (`ABC`, `ARC` or `AGC`).

```input1
1199
```

```output1
ABC
```

$1199$ is less than $1200$, so ABC will be rated.

```input2
1200
```

```output2
ARC
```

$1200$ is not less than $1200$ and ABC will be unrated, but it is less than $2800$ and ARC will be rated.

```input3
4208
```

```output3
AGC
```