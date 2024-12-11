Score : $100$ points

## Problem Statement

In the Kingdom of AtCoder, people use a language called Taknese, which uses lowercase English letters.

In Taknese, the plural form of a noun is spelled based on the following rules:

- If a noun's singular form does not end with `s`, append `s` to the end of the singular form.
- If a noun's singular form ends with `s`, append `es` to the end of the singular form.

You are given the singular form $S$ of a Taknese noun. Output its plural form.

## Constraints

- $S$ is a string of length $1$ between $1000$, inclusive.
- $S$ contains only lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the plural form of the given Taknese word.

```input1
apple
```

```output1
apples
```

`apple` ends with `e`, so its plural form is `apples`.

```input2
bus
```

```output2
buses
```

`bus` ends with `s`, so its plural form is `buses`.

```input3
box
```

```output3
boxs
```