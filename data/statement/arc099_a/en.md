Score : $300$ points

## Problem Statement

There is a sequence of length $N$: $A_1, A_2, ..., A_N$. Initially, this sequence is a permutation of $1, 2, ..., N$.

On this sequence, Snuke can perform the following operation:

- Choose $K$ consecutive elements in the sequence. Then, replace the value of each chosen element with the minimum value among the chosen elements.

Snuke would like to make all the elements in this sequence equal by repeating the operation above some number of times.
Find the minimum number of operations required.
It can be proved that, Under the constraints of this problem, this objective is always achievable.

## Constraints

- $2 \leq K \leq N \leq 100000$
- $A_1, A_2, ..., A_N$ is a permutation of $1, 2, ..., N$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum number of operations required.

```input1
4 3
2 3 1 4
```

```output1
2
```

One optimal strategy is as follows:

- <p>In the first operation, choose the first, second and third elements. The sequence $A$ becomes $1, 1, 1, 4$.</p>
- <p>In the second operation, choose the second, third and fourth elements. The sequence $A$ becomes $1, 1, 1, 1$.</p>

```input2
3 3
1 2 3
```

```output2
1
```

```input3
8 3
7 3 1 8 4 6 2 5
```

```output3
4
```