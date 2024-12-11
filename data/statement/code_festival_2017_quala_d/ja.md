配点 : $700$ 点

## 問題文

縦 $H$ 行、横 $W$ 列のマス目があります。
上から $i$ 行目、左から $j$ 列目のマスを $(i,\ j)$ と表します。
また、マス $(i_1,\ j_1)$ と $(i_2,\ j_2)$ の間の距離を $|i_1 - i_2| + |j_1 - j_2|$ と定義します。

すぬけ君は各マスを 赤 / 黄 / 緑 / 青 のいずれかの色で塗ろうとしています。
このとき、正の整数 $d$ に対して、次の条件が成り立つようにします。

- 距離がちょうど $d$ であるようなマスのペアには、異なる色が塗られている。

条件を満たす色の塗り方をひとつ求めてください。
解は必ず存在することが示せます。

## 制約

- $2 \leq H, W \leq 500$
- $1 \leq d \leq H + W - 2$

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $d$

## 出力

条件を満たす色の塗り方をひとつ出力せよ。
色の塗り方は次のフォーマットで出力せよ。
マス $(i,\ j)$ の色が 赤 / 黄 / 緑 / 青 ならば、$c_{ij}$ はそれぞれ `R` / `Y` / `G` / `B` とせよ。

> $c_{11}$$c_{12}$$...$$c_{1W}$
> 
> $:$
> 
> $c_{H1}$$c_{H2}$$...$$c_{HW}$

```input1
2 2 1
```

```output1
RY
GR
```

距離がちょうど $1$ であるようなマスのペアは、次の $4$ 組です。
右側に示したように、どのペアにも異なる色が塗られています。

- $(1,\ 1)$ と $(1,\ 2)$ : `R` と `Y`
- $(1,\ 2)$ と $(2,\ 2)$ : `Y` と `R`
- $(2,\ 2)$ と $(2,\ 1)$ : `R` と `G`
- $(2,\ 1)$ と $(1,\ 1)$ : `G` と `R`

```input2
2 3 2
```

```output2
RYB
RGB
```

距離がちょうど $2$ であるようなマスのペアは、次の $6$ 組です。
右側に示したように、どのペアにも異なる色が塗られています。

- $(1,\ 1)$ と $(1,\ 3)$ : `R` と `B`
- $(1,\ 3)$ と $(2,\ 2)$ : `B` と `G`
- $(2,\ 2)$ と $(1,\ 1)$ : `G` と `R`
- $(2,\ 1)$ と $(2,\ 3)$ : `R` と `B`
- $(2,\ 3)$ と $(1,\ 2)$ : `B` と `Y`
- $(1,\ 2)$ と $(2,\ 1)$ : `Y` と `R`