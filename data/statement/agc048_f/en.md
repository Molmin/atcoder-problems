Score : $2200$ points

## Problem Statement

Snuke received a big blackboard.
Being pleased with this present, he first wrote some positive integers.
Then, he repeated the following operation until there was no integer written on the blackboard:

- Choose one integer written on the blackboard and erase it.
Let $x$ be the erased integer.
Then, record the remainder of $x$ divided by $2$ on his notebook.
Finally, if $x \geq 2$, write a new integer $x-1$ on the blackboard.

Snuke's record is represented by a string $S$ consisting of `0` and `1`, where $S_i$ is the remainder of the chosen integer divided by $2$ in the $i$-th operation.

Snuke forgot the combination of positive integers he first wrote on the blackboard.
From the information given as the string $S$, find the number of possible combinations of positive integers he first wrote on the blackboard.
Here, we consider combinations $a$ and $b$ of positive integers different when there is an integer $v$ such that the numbers of times $v$ occurs in $a$ and $v$ occurs in $b$ differ.
Since the count can be enormous, compute it modulo $(10^9+7)$.
Also, it is possible that Snuke's record is incorrect and that no combination of positive integers satisfies the condition. In such a case, just answer $0$.

## Constraints

- $1 \leq |S| \leq 300$
- $S$ is a string consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of possible combinations of positive integers written on the blackboard, modulo $(10^9+7)$.

```input1
101
```

```output1
2
```

There are two possible combinations of integers written on the blackboard: $\{1,2\}$ and $\{3\}$.

```input2
100
```

```output2
0
```

There is no possible combination of integers written on the blackboard.

```input3
010101
```

```output3
3
```

There are three possible combinations of integers written on the blackboard: $\{2,2,2\}$, $\{2,4\}$, and $\{6\}$.

```input4
11101000111110111101001011110010111110101111110111
```

```output4
3904
```