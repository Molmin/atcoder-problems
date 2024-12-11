Score : $200$ points

## Problem Statement

KEYENCE has a culture of reporting things as they are, whether good or bad.<br>
So we want to check whether the reported content is exactly the same as the original text.

You are given two strings $S$ and $T$, consisting of lowercase English letters.<br>
If $S$ and $T$ are equal, print $0$; otherwise, print the position of the first character where they differ.<br>
Here, if the $i$-th character exists in only one of $S$ and $T$, consider that the $i$-th characters are different.

More precisely, if $S$ and $T$ are not equal, print the smallest integer $i$ satisfying one of the following conditions:

- $1\leq i\leq |S|$, $1\leq i\leq |T|$, and $S_i\neq T_i$.
- $|S| &lt; i \leq |T|$.
- $|T| &lt; i \leq |S|$.

Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively, and $S_i$ and $T_i$ denote the $i$-th characters of $S$ and $T$, respectively.

## Constraints

- $S$ and $T$ are strings of length between $1$ and $100$, inclusive, consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If $S$ and $T$ are equal, print $0$; otherwise, print the position of the first character where they differ.

```input1
abcde
abedc
```

```output1
3
```

We have $S=$ `abcde` and $T=$ `abedc`.<br>
$S$ and $T$ have the same first and second characters, but differ at the third character, so print $3$.

```input2
abcde
abcdefg
```

```output2
6
```

We have $S=$ `abcde` and $T=$ `abcdefg`.<br>
$S$ and $T$ are equal up to the fifth character, but only $T$ has a sixth character, so print $6$.

```input3
keyence
keyence
```

```output3
0
```

$S$ and $T$ are equal, so print $0$.