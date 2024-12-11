Score : $100$ points

## Problem Statement

There are $N$ people.  Each of them agrees or disagrees with a proposal.  Here, $N$ is an odd number.

The $i$-th $(i = 1, 2, \dots, N)$ person's opinion is represented by a string $S_i$: the person agrees if $S_i =$ `For` and disagrees if $S_i =$ `Against`.

Determine whether the majority agrees with the proposal.

## Constraints

- $N$ is an **odd number** between $1$ and $99$, inclusive.
- $S_i =$ `For` or $S_i =$ `Against`, for all $i = 1, 2, \dots, N$.

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

Print `Yes` if the majority of the $N$ people agree with the proposal; print `No` otherwise.

```input1
3
For
Against
For
```

```output1
Yes
```

The proposal is supported by two people, which is the majority, so `Yes` should be printed.

```input2
5
Against
Against
For
Against
For
```

```output2
No
```

The proposal is supported by two people, which is not the majority, so `No` should be printed.

```input3
1
For
```

```output3
Yes
```