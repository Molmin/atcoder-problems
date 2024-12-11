Score : $800$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.
Determine whether we can turn $S$ into a palindrome by repeating the operation of swapping two adjacent characters. If it is possible, find the minimum required number of operations.

## Constraints

- $1 \leq |S| \leq 2 \times 10^5$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If we cannot turn $S$ into a palindrome, print `-1`. Otherwise, print the minimum required number of operations.

```input1
eel
```

```output1
1
```

We can turn $S$ into a palindrome by the following operation:

- Swap the $2$-nd and $3$-rd characters. $S$ is now `ele`.

```input2
ataatmma
```

```output2
4
```

We can turn $S$ into a palindrome by the following operation:

- Swap the $5$-th and $6$-th characters. $S$ is now `ataamtma`.
- Swap the $4$-th and $5$-th characters. $S$ is now `atamatma`.
- Swap the $3$-rd and $4$-th characters. $S$ is now `atmaatma`.
- Swap the $2$-nd and $3$-rd characters. $S$ is now `amtaatma`.

```input3
snuke
```

```output3
-1
```

We cannot turn $S$ into a palindrome.