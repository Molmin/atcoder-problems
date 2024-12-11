Score : $100$ points

## Problem Statement

Rng is going to a festival.

The name of the festival is given to you as a string $S$, which ends with `FESTIVAL`, from input. Answer the question: "Rng is going to a festival of what?" Output the answer.

Here, assume that the name of "a festival of $s$" is a string obtained by appending `FESTIVAL` to the end of $s$.
For example, `CODEFESTIVAL` is a festival of `CODE`.

## Constraints

- $9 \leq |S| \leq 50$
- $S$ consists of uppercase English letters.
- $S$ ends with `FESTIVAL`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer to the question: "Rng is going to a festival of what?"

```input1
CODEFESTIVAL
```

```output1
CODE
```

This is the same as the example in the statement.

```input2
CODEFESTIVALFESTIVAL
```

```output2
CODEFESTIVAL
```

This string is obtained by appending `FESTIVAL` to the end of `CODEFESTIVAL`, so it is a festival of `CODEFESTIVAL`.

```input3
YAKINIKUFESTIVAL
```

```output3
YAKINIKU
```