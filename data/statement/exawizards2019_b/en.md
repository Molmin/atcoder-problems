Score : $200$ points

## Problem Statement

There are $N$ people numbered $1$ to $N$. Each person wears a red hat or a blue hat.

You are given a string $s$ representing the colors of the people. Person $i$ wears a red hat if $s_i$ is `R`, and a blue hat if $s_i$ is `B`.

Determine if there are more people wearing a red hat than people wearing a blue hat.

## Constraints

- $1 \leq N \leq 100$
- $|s| = N$
- $s_i$ is `R` or `B`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Output

If there are more people wearing a red hat than there are people wearing a blue hat, print `Yes`; otherwise, print `No`.

```input1
4
RRBR
```

```output1
Yes
```

- There are three people wearing a red hat, and one person wearing a blue hat.
- Since there are more people wearing a red hat than people wearing a blue hat, the answer is `Yes`.

```input2
4
BRBR
```

```output2
No
```

- There are two people wearing a red hat, and two people wearing a blue hat.
- Since there are as many people wearing a red hat as people wearing a blue hat, the answer is `No`.