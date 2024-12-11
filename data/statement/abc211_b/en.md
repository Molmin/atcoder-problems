Score : $200$ points

## Problem Statement

You are given four strings $S_1$, $S_2$, $S_3$, and $S_4$.<br>
Determine whether this sequence of strings has one of each of the following: `H`, `2B`, `3B`, and `HR`.<br>
Here, it is guaranteed that every $S_i$ is `H`, `2B`, `3B`, or `HR`.

## Constraints

- Each $S_i$ is `H`, `2B`, `3B`, or `HR`.

## Input

Input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$
> 
> $S_3$
> 
> $S_4$

## Output

If the given sequence of strings has one of each of `H`, `2B`, `3B`, and `HR`, print `Yes`.<br>
Otherwise, print `No`.

```input1
3B
HR
2B
H
```

```output1
Yes
```

We have one of each of `H`, `2B`, `3B`, and `HR`.

```input2
2B
3B
HR
3B
```

```output2
No
```

We have no `H`.