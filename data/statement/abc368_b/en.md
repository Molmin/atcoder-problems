Score : $200$ points

## Problem Statement

You are given a sequence of $N$ positive integers $A = (A_1, A_2, \dots ,A_N)$. Takahashi repeats the following operation until $A$ contains one or fewer positive elements:

- Sort $A$ in descending order. Then, decrease both $A_1$ and $A_2$ by $1$.

Find the number of times he performs this operation.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4
1 2 3 3
```

```output1
4
```

The process goes as follows:

- After the 1st operation, $A$ is $(2, 2, 2, 1)$.
- After the 2nd operation, $A$ is $(1, 1, 2, 1)$.
- After the 3rd operation, $A$ is $(1, 0, 1, 1)$.
- After the 4th operation, $A$ is $(0, 0, 1, 0)$. $A$ no longer contains more than one positive elements, so the process ends here.

```input2
3
1 1 100
```

```output2
2
```