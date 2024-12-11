Score : $100$ points

## Problem Statement

Takahashi is planning to eat $N$ dishes.

The $i$-th dish he plans to eat is sweet if $S_i =$ `sweet`, and salty if $S_i =$ `salty`.

If he eats two sweet dishes consecutively, he will feel sick and be unable to eat any more dishes.

Determine whether he can eat all the dishes.

## Constraints

- $N$ is an integer between $1$ and $100$, inclusive.
- Each $S_i$ is `sweet` or `salty`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print `Yes` if Takahashi can eat all the dishes, and `No` otherwise.

```input1
5
salty
sweet
salty
salty
sweet
```

```output1
Yes
```

He will not eat two sweet dishes consecutively, so he can eat all the dishes without feeling sick.

```input2
4
sweet
salty
sweet
sweet
```

```output2
Yes
```

He will feel sick but can still eat all the dishes.

```input3
6
salty
sweet
sweet
salty
sweet
sweet
```

```output3
No
```

He feels sick when eating the 3rd dish and cannot eat the 4th and subsequent dishes.