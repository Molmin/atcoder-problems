Score : $100$ points

## Problem Statement

Ringo is giving a present to Snuke.

Ringo has found out that Snuke loves *yakiniku* (a Japanese term meaning grilled meat. *yaki*: grilled, *niku*: meat). He supposes that Snuke likes grilled things starting with `YAKI` in Japanese, and does not like other things.

You are given a string $S$ representing the Japanese name of Ringo's present to Snuke. Determine whether $S$ starts with `YAKI`.

## Constraints

- $1 \leq |S| \leq 10$
- $S$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ starts with `YAKI`, print `Yes`; otherwise, print `No`.

```input1
YAKINIKU
```

```output1
Yes
```

`YAKINIKU` starts with `YAKI`.

```input2
TAKOYAKI
```

```output2
No
```

`TAKOYAKI` (a Japanese snack. *tako*: octopus) does not start with `YAKI`.

```input3
YAK
```

```output3
No
```