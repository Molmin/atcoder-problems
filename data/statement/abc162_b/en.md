Score : $200$ points

## Problem Statement

Let us define the **FizzBuzz sequence** $a_1,a_2,...$ as follows:

- If both $3$ and $5$ divides $i$, $a_i=\text{FizzBuzz}$.
- If the above does not hold but $3$ divides $i$, $a_i=\text{Fizz}$.
- If none of the above holds but $5$ divides $i$, $a_i=\text{Buzz}$.
- If none of the above holds, $a_i=i$.

Find the sum of all numbers among the first $N$ terms of the FizzBuzz sequence.

## Constraints

- $1 \leq N \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the sum of all numbers among the first $N$ terms of the FizzBuzz sequence.

```input1
15
```

```output1
60
```

The first $15$ terms of the FizzBuzz sequence are:

$1,2,\text{Fizz},4,\text{Buzz},\text{Fizz},7,8,\text{Fizz},\text{Buzz},11,\text{Fizz},13,14,\text{FizzBuzz}$

Among them, numbers are $1,2,4,7,8,11,13,14$, and the sum of them is $60$.

```input2
1000000
```

```output2
266666333332
```

Watch out for overflow.