Score : $100$ points

## Problem Statement

You are given a string $S$, which represents a weather forecast for the seven days starting tomorrow.<br>
The $i$-th of those seven days is forecast to be sunny if the $i$-th character of $S$ is `o`, and rainy if that character is `x`.

Tell us whether the $N$-th day is forecast to be sunny.

## Constraints

- $N$ is an integer between $1$ and $7$ (inclusive).
- $S$ is a string of length $7$ consisting of `o` and `x`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print `Yes` if the $N$-th of the seven days starting tomorrow is forecast to be sunny, and `No` if that day is forecast to be rainy.

```input1
4
oooxoox
```

```output1
No
```

The forecast for each of the seven days starting tomorrow is as follows: sunny, sunny, sunny, rainy, sunny, sunny, rainy.<br>
In particular, the fourth day is forecast to be rainy.

```input2
7
ooooooo
```

```output2
Yes
```