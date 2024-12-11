Score : $100$ points

## Problem Statement

There is always an integer in Takahashi's mind.

Initially, the integer in Takahashi's mind is $0$. Takahashi is now going to eat four symbols, each of which is `+` or `-`. When he eats `+`, the integer in his mind increases by $1$; when he eats `-`, the integer in his mind decreases by $1$.

The symbols Takahashi is going to eat are given to you as a string $S$. The $i$-th character in $S$ is the $i$-th symbol for him to eat.

Find the integer in Takahashi's mind after he eats all the symbols.

## Constraints

- The length of $S$ is $4$.
- Each character in $S$ is `+` or `-`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the integer in Takahashi's mind after he eats all the symbols.

```input1
+-++
```

```output1
2
```

- Initially, the integer in Takahashi's mind is $0$.
- The first integer for him to eat is `+`. After eating it, the integer in his mind becomes $1$.
- The second integer to eat is `-`. After eating it, the integer in his mind becomes $0$.
- The third integer to eat is `+`. After eating it, the integer in his mind becomes $1$.
- The fourth integer to eat is `+`. After eating it, the integer in his mind becomes $2$.

Thus, the integer in Takahashi's mind after he eats all the symbols is $2$.

```input2
-+--
```

```output2
-2
```

```input3
----
```

```output3
-4
```