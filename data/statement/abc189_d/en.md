Score : $400$ points

## Problem Statement

Given are $N$ strings $S_1,\ldots,S_N$, each of which is `AND` or `OR`.

Find the number of tuples of $N+1$ variables $(x_0,\ldots,x_N)$, where each element is $\text{True}$ or $\text{False}$, such that the following computation results in $y_N$ being $\text{True}$:

- $y_0=x_0$;
- for $i\geq 1$, $y_i=y_{i-1} \land x_i$ if $S_i$ is `AND`, and $y_i=y_{i-1} \lor x_i$ if $S_i$ is `OR`.

Here, $a \land b$ and $a \lor b$ are logical operators.

## Constraints

- $1 \leq N \leq 60$
- $S_i$ is `AND` or `OR`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
2
AND
OR
```

```output1
5
```

For example, if $(x_0,x_1,x_2)=(\text{True},\text{False},\text{True})$, we have $y_2 = \text{True}$, as follows:

- $y_0=x_0=\text{True}$
- $y_1=y_0 \land x_1 = \text{True} \land \text{False}=\text{False}$
- $y_2=y_1 \lor x_2 = \text{False} \lor \text{True}=\text{True}$

All of the five tuples $(x_0,x_1,x_2)$ resulting in $y_2 = \text{True}$ are shown below:

- $(\text{True},\text{True},\text{True})$
- $(\text{True},\text{True},\text{False})$
- $(\text{True},\text{False},\text{True})$
- $(\text{False},\text{True},\text{True})$
- $(\text{False},\text{False},\text{True})$

```input2
5
OR
OR
OR
OR
OR
```

```output2
63
```

All tuples except the one filled entirely with $\text{False}$ result in $y_5 = \text{True}$.