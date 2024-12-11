Score : $600$ points

## Problem Statement

Snuke has a die (singular of dice) that shows integers from $1$ through $N$ with equal probability, and an integer $1$.<br>
He repeats the following operation while his integer is less than or equal to $M$.

- He rolls the die.  If the die shows an integer $x$, he multiplies his integer by $x$.

Find the expected value of the number of times he rolls the die until he stops, modulo $10^9+7$.

Definition of the expected value modulo $10^9+7$

We can prove that the desired expected value is always a rational number.  Moreover, under the constraints of the problem, when the value is represented as an irreducible fraction $\frac{P}{Q}$, we can also prove that $Q \not\equiv 0 \pmod{10^9+7}$.  Thus, an integer $R$ such that $R \times Q \equiv P \pmod{10^9+7}$ and $0 \leq R \lt 10^9+7$ is uniquely determined.  Answer such $R$.

## Constraints

- $2 \leq N \leq 10^9$
- $1 \leq M \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 1
```

```output1
2
```

The answer is the expected value of the number of rolls until it shows $2$ for the first time.  Thus, $2$ should be printed.

```input2
2 39
```

```output2
12
```

The answer is the expected value of the number of rolls until it shows $2$ six times.  Thus, $12$ should be printed.

```input3
3 2
```

```output3
250000004
```

The answer is $\frac{9}{4}$.  We have $4 \times 250000004 \equiv 9 \pmod{10^9+7}$, so $250000004$ should be printed.<br>
Note that the answer should be printed modulo $\bf{10^9 + 7 = 1000000007}$.

```input4
2392 39239
```

```output4
984914531
```

```input5
1000000000 1000000000
```

```output5
776759630
```