Score : $100$ points

## Problem Statement

You are given a three-digit positive integer $N$.<br>
Determine whether $N$ is a *palindromic number*.<br>
Here, a palindromic number is an integer that reads the same backward as forward in decimal notation.

## Constraints

- $100 \leq N \leq 999$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:  

> $N$

## Output

If $N$ is a palindromic number, print `Yes`; otherwise, print `No`.

```input1
575
```

```output1
Yes
```

$N=575$ is also $575$ when read backward, so it is a palindromic number. You should print `Yes`.

```input2
123
```

```output2
No
```

$N=123$ becomes $321$ when read backward, so it is not a palindromic number. You should print `No`.

```input3
812
```

```output3
No
```