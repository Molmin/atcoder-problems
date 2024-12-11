Score : $1000$ points

## Problem Statement

Snuke got a present from his mother on his birthday.
The present was a pair of two sequences $a$ and $b$, consisting of positive integers.
They satisfied all of the following properties:

- The sum of all elements of $a$ is $N$.
- The sum of all elements of $b$ is $N$.
- Any string of length $N$ that satisfies the following two conditions (1) and (2) will also satisfy the condition (3).
- -   - **(1)** Any of the following forms a palindrome: the first $a_1$ letters, the following $a_2$ letters, the following $a_3$ letters and so on.
-   - **(2)** Any of the following forms a palindrome: the first $b_1$ letters, the following $b_2$ letters, the following $b_3$ letters and so on.
-   - **(3)** All $N$ letters are the same.

He was happy, until one day he lost both of the sequences.
Now, he only remembers that the sequence $a$ was a permutation of another sequence $A$ of length $M$.

To bring him happiness again, his mother has decided to give him another pair of sequences $a$ and $b$ that satisfies his favorite properties and is consistent with his memory.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 100$
- $1 \leq A_i \leq 10^5$
- The sum of all $A_i$ equals $N$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $...$ $A_M$

## Output

If there exists a pair of sequences $a$ and $b$ that satisfies the properties and is consistent with Snuke's memory, print three lines. The first line must contain the sequence $a$, the second line must contain the length of the sequence $b$, and the third line must contain the sequence $b$.

If such a pair does not exist (because Snuke's memory is wrong or some other reason), print a single line containing the word `Impossible` (case-sensitive).

```input1
3 2
2 1
```

```output1
1 2
1
3
```

```input2
6 1
6
```

```output2
6
3
1 2 3
```

```input3
55 10
1 2 3 4 5 6 7 8 9 10
```

```output3
Impossible
```