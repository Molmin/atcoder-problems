Score : $100$ points

## Problem Statement

Takahashi had a job interview.

You are given the number of interviewers, $N$, and a string $S$ of length $N$ representing the interviewers' evaluations of him.<br>
For each $i=1,2,\ldots,N$, the $i$-th character of $S$ corresponds to the $i$-th interviewer's evaluation; `o` means Good, `-` means Fair, and `x` means Poor.

Takahashi will pass if both of the following conditions are satisfied, and fail otherwise.

- At least one interviewer's evaluation is Good.
- No interviewer's evaluation is Poor.

Determine whether Takahashi passes.

## Constraints

- $1 \leq N \leq 100$
- $S$ is a string of length $N$ consisting of `o`, `-`, and `x`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If Takahashi passes, print `Yes`; otherwise, print `No`.

```input1
4
oo--
```

```output1
Yes
```

The first and second interviewers' evaluations are Good, and no interviewer's evaluation is Poor, so he passes.

```input2
3
---
```

```output2
No
```

No interviewer's evaluation is Good, so he fails.

```input3
1
o
```

```output3
Yes
```

```input4
100
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooox
```

```output4
No
```

The $100$-th interviewer's evaluation is Poor, so he fails.