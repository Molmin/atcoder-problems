Score : $100$ points

## Problem Statement

Takahashi is distributing $N$ balls to $K$ persons.

If each person has to receive at least one ball, what is the maximum possible difference in the number of balls received between the person with the most balls and the person with the fewest balls?

## Constraints

- $1 \leq K \leq N \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the maximum possible difference in the number of balls received.

```input1
3 2
```

```output1
1
```

The only way to distribute three balls to two persons so that each of them receives at least one ball is to give one ball to one person and give two balls to the other person.

Thus, the maximum possible difference in the number of balls received is $1$.

```input2
3 1
```

```output2
0
```

We have no choice but to give three balls to the only person, in which case the difference in the number of balls received is $0$.

```input3
8 5
```

```output3
3
```

For example, if we give $1, 4, 1, 1, 1$ balls to the five persons, the number of balls received between the person with the most balls and the person with the fewest balls would be $3$, which is the maximum result.